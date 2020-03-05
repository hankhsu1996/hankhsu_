const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
    "public",
    {
        branch: "master",
        repo: "https://github.com/hankhsu1996/hankhsu1996.github.io.git"
    },
    () => {
        console.log("Deploy Complete!");
    }
);
