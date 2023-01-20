/**
 *  --- Fundamentals of a Linked List ---
 *  --- By Olu Adeyemo (olu@cyclobold.com)
 * 
 * There are three types of Linked list
 * 1. Singly linked list 
 * 2. Doubly linked list
 * 3. Circular linked list
 * 
 * In this introduction, we will be looking at the Singly linked list
 * 
 */

/**
 * Create the class that defines the structure of the Node
 */
 function Node(value){
    //When a node is created, the value that the node will have is passed to the constructor. So values are what set a node
    this.value = value;
    this.next = null;
}


//Define the class structure for the LInked list
// - In a linked list, the 'next' of the headNode must point to the nextNode...
//The 'next' of the tailNode must point to null
//Therefore, 
//this.headNode.next = nextNode
//this.tailNode.next = null 
function LinkedList(){

    //every linked list should have two types of nodes:
    // 1. The headNode and 
    // 2. The TailNode 
    this.headNode = null;
    this.tailNode = null;


    //FEATURES 

    // - 1. Insert into List (insertNode)
    //This method will add a new value to the linked list..
    //but remember that the value is what actually makes it reasonable to have a node in the first place, 
    //What this means is that, without a value, there cannot be a Node
    this.insertNode = function(value){

        //since a value is passed, a node can be created
        //you need to decide whether this node is the first or not
        let newNode = new Node(value); // ------------------ (1)

        //at this point, on (equation 1) this new Node(newNode) is an orphan node, meaning, it is not attached to any list
        //so this node needs to be attached to the list..
        //but to attach this list, you must first determine where to put it, is it the first node in the list

        if(this.headNode == null){
            //this means that the headNode has not been set. Since a linkedlist must have atleast one node, which should be the headNode 
            //so you must set this headNode here 
         
            this.headNode = newNode; // ---------------------- (2)

            // Since this node (newNode) is the headNode, it makes sense to conclude that it is also the tailNode
            //If the headNode does not exist, then the tailNode does not exist too...
            this.tailNode = newNode // ----------------------- (3)

            return this;

        }

        //the headNode exists, also, the tailNode exists too. 
        //Since the next node is always attached to the tailNode, the next property must be attached to the tailNode
        this.tailNode.next = newNode // --------------------------- (4)
        
        //since this node (is the last node)
        this.tailNode = newNode; // -----------------------------(5)


        return this;



    }


}



//  --- Workshop -------

// 1. Create a new linked list
// const list = new LinkedList();

// 2. Add a new node to the Linked List in 1 above
// list.insertNode("biro"); // add 'biro' to the linked list
//list.insertNode("pencil"); // add 'pencil' to the linked list
