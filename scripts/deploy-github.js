const ghpages = require("gh-pages");

// replace with your repo url
console.log("Started deploying to hankhsu1996.github.io");
ghpages.publish(
    "public",
    {
        branch: "master",
        repo: "https://github.com/hankhsu1996/hankhsu1996.github.io.git"
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Finished deploying to hankhsu1996.github.io");
        }
    }
);
