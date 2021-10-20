async function main() {
    const SubscriptionService = await ethers.getContractFactory("SubscriptionService");
    const service = await SubscriptionService.deploy();

    console.log("SubscriptionService deployed to:", service.address);
    await service.createPlan("0x5FbDB2315678afecb367f032d93F642f64180aa3", 1, 2)
    console.log("Num Plans: ", (await service.planIndex()).toNumber());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});