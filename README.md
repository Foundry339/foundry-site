# FWL_landing-page

## Contact form (Netlify Forms)

The "Start a Project" form is wired up for [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — no extra account or API key needed, but it only works once this site is deployed on Netlify (Netlify detects the form at build time by scanning the static HTML for `data-netlify="true"`).

After deploying, do this once in the Netlify dashboard to get submissions emailed to you:

1. Go to your site in Netlify → **Site configuration** → **Forms** → **Form notifications**.
2. Click **Add notification** → **Email notification**.
3. Set the notification email to `foundryweblab@gmail.com`.
4. Save.

Submissions will also always be visible under **Forms** in the Netlify dashboard, even before/without the email notification.

Locally (e.g. opening the file directly, or a non-Netlify host), the form will show a "Something went wrong" message since there's no Netlify backend to receive the POST — that's expected.
