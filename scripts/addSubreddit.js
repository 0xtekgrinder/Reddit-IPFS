const axios = require('axios');

(async () => {
    console.log("started");
    for (let i = 0; i < 100; ++i) {
        await axios.post('http://localhost:3000/sub/', {
            title: i.toString(),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus velit eu justo varius, quis mollis justo euismod. Cras vel."
        })
        console.log(i);
    }
    console.log("done");
})();