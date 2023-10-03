class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot(leaves = this.leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }
        const layer = [];
        for (let i = 0; i < leaves.length; i += 2) {
            const left = leaves[i];
            const right = leaves[i + 1];
            if (right) { // if there are odd leaves we combine to hash 
                layer.push(this.concat(left, right));
            }
            else { // push single hash without pair 
                layer.push(left);
            }
        }
        return this.getRoot(layer);
    }
}

module.exports = MerkleTree;