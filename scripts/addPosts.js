const axios = require('axios');

(async () => {
    console.log("started");
    const cids = await axios.get('http://localhost:3000/subs');
    for (let i = 0; i < 100; ++i) {
        const list = [];
        for (let x = 0; x < 100; ++x) {
            list.push(axios.post(`http://localhost:3000/sub/${cids.data[x]}/post`, {
                title: i.toString(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus velit eu justo varius, quis mollis justo euismod. Cras vel.",
                upvotes: 0
            }));
        }
        await Promise.all(list);
        console.log("done");
    }
    console.log("finished");
})();