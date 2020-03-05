const ghpages = require("gh-pages");

// replace with your repo url
console.log("Started deploying to hankhsu1996.github.io");
ghpages.publish(
    "public",
    {
        branch: "master",
        repo: `https://hankhsu1996:${process.env.GH_TOKEN}@github.com/hankhsu1996/hankhsu1996.github.io.git`,
        user: {
            name: "hankhsu1996",
            email: "hank850503@gmail.com"
        }
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Finished deploying to hankhsu1996.github.io");
        }
    }
);
