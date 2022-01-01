#!/bin/node
const gmll = require("gmll");
const config = require("gmll/config");
const d = require("gmll/downloader");

const { fastLaunch } = require("msmc");
config.setRoot(".MC")
gmll.init().then(async () => {
    const e = await fastLaunch("raw", console.log);
    const token = gmll.wrapper.msmc2token(e);
    var int = new gmll.instance({ version: "1.12.2", name: "my Instance" })
    int.setIcon("icon_32x32.png","icon_16x16.png")
    int.save();
    var int3 = gmll.instance.get("my Instance")
    int3.launch(token);
})



