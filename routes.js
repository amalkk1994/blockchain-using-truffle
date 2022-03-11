function routes(app, db, accounts, contactList) {
  app.get("/contacts", async (request, response) => {
    let cache = [];
    console.log("contactList", contactList.methods);
    const COUNTER = await contactList.methods.count().call();
    console.log("counter", COUNTER);

    for (let i = 1; i <= COUNTER; i++) {
      const contact = await contactList.methods.contacts(i).call();
      cache = [...cache, contact];
    }

    response.json(cache);
  });
}

module.exports = routes;
