/**
 *  --- Fundamentals of a Linked List ---
 *  --- By Olu Adeyemo (olu@cyclobold.com)
 * 
 * - Sometimes, your linked list can have more features. In this note for example, 
 * the linked list has the 'print' and 'toArray' features 
 */

// I have added two new features to this source code. Please refer to the introduction.js for more information

function Node(value){
    this.value = value;
    this.next = null;
}


function LinkedList(){

    this.headNode = null;
    this.tailNode = null;


    this.insertNode = function(value){
        
        // Create a new node
        const newNode = new Node(value);

        //attach this newNode to the list
        if(!this.headNode){
            this.headNode = newNode;
            this.tailNode = newNode

            return this;
        }

        this.tailNode.next = newNode;
        this.tailNode = newNode;

        return this;

    }


    /**
     * NEW FEATURES ---------
     */

    // 1. Print all nodes

    // - Printing of nodes will always start from the headNode 
    this.printNodes = function(){

        // since printing starts from the headNode, you need a reference to that headNode
        let currentNode = this.headNode;

        while(currentNode != null){
            //if the currentNode exists, you can proceed by printing it(currentNode), 
            //then, after printing, move the currentNode to the next node, this will move one step forward
            console.log(currentNode);
            currentNode = currentNode.next;
        }

    }


    // 2. Convert all nodes to an array
    this.toArray = function(){
        //since we are converting all nodes to array, we'll be using the Array object here
        const allNodes = [];

        let currentNode = this.headNode;
        while(currentNode){
            allNodes.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return allNodes;




    }

}
