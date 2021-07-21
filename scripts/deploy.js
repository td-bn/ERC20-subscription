async function main() {
    const SubscriptionService = await ethers.getContractFactory("SubscriptionService");
    const service = await SubscriptionService.deploy();

    console.log("SubscriptionService deployed to:", service.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});