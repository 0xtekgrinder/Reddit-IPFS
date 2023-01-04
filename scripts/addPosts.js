const axios = require('axios');

(async () => {
    console.log("started");
    const cids = (await axios.get('http://localhost:3000/subs', )).data;
    for (let i = 0; i < 100; ++i) {
        for (let x = 0; x <= 100; ++x) {
            await axios.post(`http://localhost:3000/sub/${cids[i]}/post`, {
                title: x.toString(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus velit eu justo varius, quis mollis justo euismod. Cras vel.",
                upvotes: 0
            });
        }
        console.log("done");
    }
    console.log("finished");
})();