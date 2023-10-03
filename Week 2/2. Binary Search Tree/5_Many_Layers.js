class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
            return;
        }
        
        let ptr = this.root; // data of this.root in ptr
        while(true) {
            if(node.data < ptr.data) {
                if(!ptr.left) {
                    ptr.left = node;
                    break; // if there is nothing in the left side we put information in the left side and break
                }
                else {
                    ptr = ptr.left; // cпускаемося на рівень нижче
                }
            }
            if (node.data > ptr.data) { // так само тільки на правій стороні
                if (!ptr.right) {
                    ptr.right = node;
                    break;
                }
                else {
                    ptr = ptr.right;
                }
            }
        }
    }
}

module.exports = Tree;