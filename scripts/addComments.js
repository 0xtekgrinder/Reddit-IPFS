const axios = require('axios');

(async () => {
    console.log("started");
    for (let i = 0; i < 100; ++i) {
        await axios.post(`http://localhost:3000/post/${process.argv[2]}/comment/${process.argv[2]}`, {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus velit eu justo varius, quis mollis justo euismod. Cras vel."
        });
    }
    console.log("done");
})();