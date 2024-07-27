import { tabsArrayType } from "@/types/components";

export function createTabsArray(
  codes,
  includeWebhookCurl = false,
  includeTweaks = false,
) {
  const tabs: tabsArrayType[] = [
    {
      name: "Run cURL",
      mode: "bash",
      image: "https://curl.se/logo/curl-symbol-transparent.png",
      language: "sh",
      code: codes[0],
      hasTweaks: includeTweaks,
    },
    {
      name: "Python API",
      mode: "python",
      image:
        "https://images.squarespace-cdn.com/content/v1/5df3d8c5d2be5962e4f87890/1628015119369-OY4TV3XJJ53ECO0W2OLQ/Python+API+Training+Logo.png?format=1000w",
      language: "py",
      code: codes[2],
      hasTweaks: includeTweaks,
    },
    {
      name: "JS API",
      mode: "javascript",
      image: "https://cdn-icons-png.flaticon.com/512/136/136530.png",
      language: "js",
      code: codes[3],
      hasTweaks: includeTweaks,
    },
    {
      name: "Python Code",
      mode: "python",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      language: "py",
      code: codes[4],
      hasTweaks: includeTweaks,
    },
    {
      name: "Chat Widget HTML",
      description:
        "Insert this code anywhere in your &lt;body&gt; tag. To use with react and other libs, check our <a class='link-color' href='https://langflow.org/guidelines/widget'>documentation</a>.",
      mode: "html",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      language: "html",
      code: codes[5],
    },
  ];

  if (includeWebhookCurl) {
    tabs.splice(1, 0, {
      name: "Webhook cURL",
      mode: "bash",
      image: "https://curl.se/logo/curl-symbol-transparent.png",
      language: "sh",
      code: codes[1],
    });
  }

  if (includeTweaks) {
    tabs.push({
      name: "Tweaks",
      mode: "python",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      language: "py",
      code: codes[6],
    });
  }

  return tabs;
}
