const cds = require("@sap/cds");
const privileged = new cds.User.Privileged();

module.exports = async (srv) => {
    const DemoService = await cds.connect.to("DemoService");

    srv.on("someFunction", () => {
        return "New Service function...";
    });

    DemoService.on("demoEvent", (msg) =>
        console.log("3rd listener received (New Service):", msg)
    );

    // cds.spawn({ user: privileged, every: 5000 }, async () => {
    //     console.log("New Application scheduled task every 5 seconds...");
    // });
};