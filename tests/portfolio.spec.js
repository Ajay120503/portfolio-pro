import { test, expect } from "@playwright/test";

test("desktop navigation, project filters, resume, and contact outcomes", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Thoughtful code.",
  );
  await expect(page.locator(".project-card")).toHaveCount(11);
  await expect(page.locator(".project-card h3")).toHaveText([
    "ShortJob",
    "ApexGrid",
    "Guardian Hub",
    "Navshra Kathakala",
    "Portfolio",
    "CWF",
    "Snippets Store",
    "SecureVault",
    "Fun Chat",
    "Web HUB",
    "Coder HUB",
  ]);
  const timestamps = await page
    .locator(".project-date time")
    .evaluateAll((elements) =>
      elements.map((element) => Date.parse(element.dateTime)),
    );
  expect(timestamps.every(Number.isFinite)).toBe(true);
  expect(timestamps).toEqual([...timestamps].sort((a, b) => b - a));
  await expect(
    page.getByRole("heading", { name: "Kaksha", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Cake shop", exact: true }),
  ).toHaveCount(0);
  const expectedProjects = [
    [
      "Family safety",
      "Guardian Hub",
      "guardian-hub",
      "https://guardian-hub-eight.vercel.app/",
    ],
    ["Real-time", "ShortJob", "short-job-3", "https://short-job-3.vercel.app/"],
    [
      "Agency website",
      "ApexGrid",
      "apexgrid",
      "https://apexgrid-beta.vercel.app/",
    ],
    [
      "E-commerce",
      "Navshra Kathakala",
      "navshra-kathakala",
      "https://navshra-kathakala.vercel.app/",
    ],
  ];
  for (const [category, title, repo, live] of expectedProjects) {
    await page.getByRole("button", { name: category, exact: true }).click();
    const card = page
      .locator(".project-card")
      .filter({ has: page.getByRole("heading", { name: title, exact: true }) });
    await expect(page.locator(".project-card")).toHaveCount(
      category === "Real-time" ? 4 : 1,
    );
    await expect(card).toHaveCount(1);
    await expect(card.locator("h3")).toHaveText(title);
    await expect(
      card.getByRole("link", { name: "View project", exact: true }),
    ).toHaveAttribute("href", live);
    await expect(
      card.getByRole("link", { name: `View ${title} source on GitHub` }),
    ).toHaveAttribute("href", `https://github.com/Ajay120503/${repo}`);
    await expect(card.locator("img")).toBeVisible();
    await expect
      .poll(() =>
        card
          .locator("img")
          .evaluate((image) => image.complete && image.naturalWidth > 0),
      )
      .toBe(true);
  }
  await page.getByRole("button", { name: /All projects/ }).click();
  await expect(page.locator(".project-card")).toHaveCount(11);
  await expect(page.getByRole("button", { name: /Explore all/ })).toHaveCount(
    0,
  );
  const resume = await page
    .getByRole("link", { name: "Download résumé" })
    .getAttribute("href");
  expect((await page.request.get(resume)).ok()).toBeTruthy();
  await page
    .locator(".navigation")
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(page).toHaveURL(/#contact$/);
  await page.getByLabel("Your name").fill("Portfolio test");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("test@example.com");
  await page
    .getByLabel("What are you thinking?")
    .fill("Testing the contact form without sending a real email.");
  await page.route("https://api.emailjs.com/**", (route) =>
    route.fulfill({ status: 500, body: "Test failure" }),
  );
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await expect(page.locator(".form-status")).toContainText("could not be sent");
  await expect(page.getByLabel("Your name")).toHaveValue("Portfolio test");
  await page.unroute("https://api.emailjs.com/**");
  await page.route("https://api.emailjs.com/**", (route) =>
    route.fulfill({ status: 200, body: "OK" }),
  );
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  await expect(page.locator(".form-status")).toContainText("has been sent");
  await expect(page.getByLabel("Your name")).toHaveValue("");
  expect(errors).toEqual([]);
});

test("mobile menu, reduced motion, and responsive overflow", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [360, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.getByRole("button", { name: /Open menu|Close menu/ });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .locator(".navigation")
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#projects$/);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
