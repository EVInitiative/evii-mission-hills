/* No-op stub. Placeholder for the Issuance Express tracking script.

   index.html carries Ben Young's markup verbatim:
     <script src="/js/tracking-ids.js"></script>
     <script src="/js/issuance-combined.js" defer=""></script>

   On the Issuance Express host those paths resolve to their real files and the
   page wires up normally. This repo also serves the same index.html from
   eviimission.com, where nothing lives at /js/. Without this file the first tag
   blocks head parsing on a 404 and the browser then tries to execute an HTML
   error page as JavaScript. An empty 200 costs nothing and keeps the markup
   identical on both hosts.

   Do not ship this file to Issuance Express. */
