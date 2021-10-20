async function main() {
    const accounts = await ethers.getSigners();
    const signer = accounts[1]
    const Token = await ethers.getContractFactory("SampleToken");
    const token = await Token.connect(signer).deploy();

    console.log("Token deployed to:", token.address);
    console.log("Balance: ", (await token.balanceOf(signer.address)).toNumber());
    console.log("Signer: ", signer.address);

    const SubscriptionService = await ethers.getContractFactory("SubscriptionService");
    const service = await SubscriptionService.connect(signer).deploy();

    console.log("SubscriptionService deployed to:", service.address);
    await service.createPlan(token.address, 90, 2);
    console.log("Num Plans: ", (await service.planIndex()).toNumber());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});