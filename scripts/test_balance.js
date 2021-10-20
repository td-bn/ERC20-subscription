async function main() {
    const accounts = await ethers.getSigners();
    const provider = ethers.defaultProvider();
    const signer = accounts[1]
    const Token = await ethers.getContract()
    const token = await Token.connect(signer).deploy();

    console.log("Token deployed to:", token.address);
    console.log("Balance: ", (await token.balanceOf(signer.address)).toNumber());
    console.log("Signer: ", signer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
}