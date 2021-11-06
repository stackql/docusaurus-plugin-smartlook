# docusaurus-plugin-smartlook
> Plugin to enable Smartlook with Docusaurus

## Installation

<details>
<summary>NPM</summary>
<p>

```bash
npm i docusaurus-plugin-smartlook
```

</p>
</details>

<details>
<summary>YARN</summary>
<p>

```bash
yarn add docusaurus-plugin-smartlook
```

</p>
</details>

## Setup

Add to `plugins` in `docusaurus.config.js`:

```js
{
  plugins: [
    'docusaurus-plugin-smartlook',
    ...
  ]
}
```

Add your Smartlook `projectKey` to `themeConfig` in the `docusaurus.config.js` file:

```js
{
  themeConfig: {
    smartlook: {
      projectKey: SMARTLOOK_PROJECT_KEY,
    },
    ...
  }
}
```
