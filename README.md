# GoodRise Canada website

Public source for the English/Vietnamese GoodRise Canada partnership homepage.

**View the published demo:** https://demo.goodrisecanada.com/

This is a clean, standalone copy of the marketing homepage. It contains no application history, owner/staff backend, database configuration, credentials, or customer records. The existing application repository remains separate and private.

## Run locally

No build or package installation is required. With Python 3 installed:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Serve this directory at the website root because asset paths are root-relative.

## Contents

- `index.html`: homepage and sample customer email.
- `partnership.css`: responsive styles.
- `partnership.js`: English/Vietnamese language control, accessible software tabs, and image zoom.
- `goodrise-assets/partnership/`: supplied photographs, branding, and software examples.

## Demo boundaries

The meeting form is explicitly preview-only: it does not send, store, or submit information. Software screenshots contain example data, not promised business results. Links to the software demo and privacy page point to the hosted GoodRise demo. No customer sign-up or owner/staff application is included here.

The live demo is deployed through the separate application repository. Pushing to this public source repository does not deploy the application automatically.

Photographs and branding remain the property of their respective rights holders. Public source visibility does not grant permission to reuse photographs of the children or the GoodRise brand.
