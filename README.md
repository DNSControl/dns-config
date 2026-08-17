# dns-config: DNS Infrastructure for OUR_ORG

This repo stores our DNS Domains and records as "infrastructure as code" for our
organization.  The Github actions allow full "gitops" updates for our DNS
infrastructure. All updates are done via PR.


## Clone this repo!

Clone this repo as a starting point for your own organization's DNS-as-Code use.

1. Clone this repo. Give it a name appropriate for your organization (`dns-config` is suggested).
2. Update `.github/workflows/pr_preview.yml` and  `.github/workflows/pr_push.yml` to use the credentials based on whether you use Method 1, 2 or 3 (see https://github.com/DNSControl/dnscontrol-action/blob/main/README.md)
3. Update `dnsconfig.js` to include example.com and one of your domains (start with a non-production domain).
4. Submit a PR, debug any auth issues.
5. Add other domains. See https://docs.dnscontrol.org/getting-started/getting-started for tips.
6. Update `README.md` to suit your organization. Delete this section.


## Updates

To add/change/delete DNS records:

**Step 1: Clone this config to your local workstation**

```bash
gh repo clone DNSControl/dns-config
cd dns-config
```

**Step 2: Make the changes you desire**

```bash
vi dnsconfig.js
```

**Step 3: Create a PR**

```bash
gh pr create --title "chore(www): What I did" --body ""
```

Step 4: Review and approve.

At this point, the Github Actions will kick in, validating your change and
posting a "diff" as a comment. Seeing the "diff" allows you to verify that the
changes that will happen are as you intended. You can make more changes and `git
push` them just like code.

Use your organization's approval process to review and approve the PR.

**Step 5: Merge it!**

On merger, a Github Action will run `dnscontrol push` to make the change.

## How to get help

FILL IN.
