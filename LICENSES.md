# Licenses

This document contains license information for the dependencies used in this react-bootstrap-starter project.

## Main Dependencies

| Package          | License |
| ---------------- | ------- |
| axios            | MIT     |
| bootstrap        | MIT     |
| react            | MIT     |
| react-dom        | MIT     |
| react-hot-toast  | MIT     |
| react-router-dom | MIT     |
| zustand          | MIT     |

## Development Dependencies

| Package                     | License    |
| --------------------------- | ---------- |
| @eslint/js                  | MIT        |
| @nabla/vite-plugin-eslint   | MIT        |
| @types/react                | MIT        |
| @types/react-dom            | MIT        |
| @vitejs/plugin-react        | MIT        |
| eslint                      | MIT        |
| eslint-plugin-react-hooks   | MIT        |
| eslint-plugin-react-refresh | MIT        |
| globals                     | MIT        |
| sass                        | MIT        |
| typescript                  | Apache-2.0 |
| typescript-eslint           | MIT        |
| vite                        | MIT        |

## License Summary

Based on the analysis of the package.json, the project contains dependencies with the following licenses:

- MIT: 20 packages
- Apache-2.0: 1 package

## License Descriptions

### MIT License

Most of the dependencies use the MIT License, which is a permissive license that allows for reuse with few restrictions. It permits use, modification, and distribution of the code in both commercial and non-commercial applications, as long as the original copyright notice and license are included.

### Apache License 2.0

One dependency (typescript) uses the Apache License 2.0, which is a permissive license similar to MIT but with additional provisions addressing patent rights. It allows for free use, modification, and distribution of the code, with the requirement to include the original copyright notice and license.

## Compliance Considerations

### Commercial Use

All licenses in this project are permissive and allow commercial use. Both MIT and Apache-2.0 licenses are business-friendly and impose minimal restrictions on usage, modification, and distribution.

## Disclaimer

This license information is provided as a reference and may not be completely accurate or up-to-date. It's recommended to verify the licenses of these dependencies before using them in production environments, especially for commercial applications.

## How to Verify Licenses

You can verify the licenses of your dependencies by running:

```bash
npx license-checker --summary
```

For a more detailed report:

```bash
npx license-checker --json > license-info.json
```

For specific packages:

```bash
npx license-checker --json | grep "package-name"
```
