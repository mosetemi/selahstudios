
This is a GitHub integration limitation, not something wrong with your project.

What’s happening
- When a Lovable project is linked to GitHub, the built-in flow is designed to create a new repository for that project.
- After you disconnect, reconnecting does not currently let you pick an existing repo to attach this project to.
- So if the UI only shows disconnect now, and then creates a new repo when you reconnect, that is expected behavior.

Important correction
- My earlier guidance about reconnecting this project to a previously created repo was inaccurate.
- Based on the current Lovable GitHub integration behavior, you cannot directly reattach this project to an older existing repository from that flow.

What you can do instead
1. Keep Lovable connected to the newly created repo
   - Best if you want ongoing two-way sync with Lovable.

2. Mirror the code to your preferred old repo manually
   - Use the Lovable-linked repo as the source.
   - Then copy/push that code into your older GitHub repo yourself.
   - This gives you your preferred repo, but Lovable’s native sync will still point to the Lovable-created repo.

3. If you need the old repo to be the primary repo
   - Current docs suggest this is not supported as a direct reconnect/import flow.
   - The workaround is manual Git syncing outside Lovable.

Recommended next step
- If you want, I can give you a short step-by-step workflow for moving this project into your old GitHub repo without losing anything.
- I can write that plan for either:
  - GitHub website only
  - Git command line
  - Desktop and mobile navigation inside Lovable
