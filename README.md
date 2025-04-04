# Tests for Automation Demo Site

https://demo.automationtesting.in/Index.html

## Prepare

### Local recommended tools:

- VSC
- Git
- Node.js (version >16)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky`

## Use

Run all tests:

```
npx playwright test
```

For more usage cases look in `package.json` scripts section.
