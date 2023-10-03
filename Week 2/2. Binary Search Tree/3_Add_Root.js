class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) { // we have node if this root is empty we add node to the root
        if(!this.root) {
            this.root = node;
        }
    }
}

module.exports = Tree;