
//Simple class for weighted graph.
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    //Add vertex.
    addVertex(vertex) {
        //Check if the vertex is already present or not.
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    //Add Edges
    addEdge(vertex1,vertex2,weight) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            //Everytime overwrite the existing value if its already exists.
            this.adjacencyList[vertex1].push({vertex: vertex2, weight:weight});
            this.adjacencyList[vertex2].push({vertex: vertex1, weight:weight});
        }
    }

    Dijkstra(start,end) {
        const distances = {};
        const visited = {};
        const previous = {};
        const q = new PriorityQueue();

        //Set all the vertex into distances with inif
        for (const vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                q.enqueue(start,0);
            } else {
                distances[vertex] = Infinity;
                // q.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
        //Loop -> q if there is q items
        //Loop -> q if there is any items
        while(q.values.length > 0) {
            //Dequeue from q.
            let minNode = q.dequeue();
            let minNodeVertex = minNode.vertex;
            if(minNodeVertex === end) break;
            if(this.adjacencyList[minNodeVertex]) {
                //Loop
                for (const v of this.adjacencyList[minNodeVertex]) {
                    //If already visited, dont look again.
                    if(!visited[v.vertex]) {
                        //Calculate the distance of current vertext from the starting vertex.
                        //Sum minNode distance and the current vertex v weight, because minNode distance is the 
                        //distance from the start to the minNode. Plus the weight of minNode ot the current vertex v
                        //it will gives the distance from start to current vertex v. then check this new distance 
                        //is smaller than the already stored distance of v. if yes, then overwrite the new 
                        //distance
                        let newDistance = distances[minNodeVertex] + v.weight;
                        if(newDistance < distances[v.vertex]) distances[v.vertex] = newDistance;
                        previous[v.vertex] = minNodeVertex;
                        q.enqueue(v.vertex,newDistance);
                    }
                }
            }
            //Add minNode into visited.
            visited[minNodeVertex] = true;
        }
        //Build the return array.
        let result = [end];
        let prev=previous[end];
        while(prev) {
            result.unshift(prev);
            prev = previous[prev];
        }
        return result;
    }
}

class Node {
    constructor(v,priority) {
        this.vertex = v;
        this.priority = priority;
    }
}

class PriorityQueue {
    
    constructor() {
        this.values = [];
    }

    enqueue(vertex,priority) {
        const node = new Node(vertex,priority);
        //push value into values
        this.values.push(node);
        //bubble up
        this.bubbleUp();
    }

    //Bubbleup to the correct spot.
    bubbleUp() {
        //Find the index of last item.
        let index = this.values.length - 1;
        //Loop -> index > 0. Should be <= 0.
        while(index > 0) {
            //Find the parent - n-1 / 2
            let parentIndex = Math.floor((index-1)/2); 
            //Check the bound
            if(!this.values[parentIndex] || !this.values[index]) break;
            let parentNode =  this.values[parentIndex];
            let currentNode = this.values[index];
            //comapre the priority.
            //if parent is equal or lesser return.
            if(parentNode.priority <= currentNode.priority) break;
            //else - swap parent & child 
            this.values[parentIndex] = currentNode;
            this.values[index] = parentNode;
            //assign index = parentIndex for next iteration.
            index = parentIndex;
        }            
    }

    dequeue() {
        let priorityNode = this.values[0];
        //get the last item and set it to first.
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            //Sink down.
            this.sinkDown();
        }
        return priorityNode;
    }

    sinkDown() {
        let index = 0;
        //index should be less than last index.
        while(index < (this.values.length - 1)) {
            //Find the children indices
            let leftChild = (2*index) + 1;
            let rightChild = (2*index) + 2;
            //If there is no child then break.
            if(!this.values[leftChild] && !this.values[rightChild]) break;
            let leftChildNode = this.values[leftChild];
            let rightChildNode = this.values[rightChild];
            let currentNode = this.values[index];
            //If the current one is lesser than both left & right
            if((!leftChildNode || currentNode.priority < leftChildNode.priority) && (!rightChildNode || currentNode.priority < rightChildNode.priority)) break;
            //if current is greater than left and left is greater than right.
            if(leftChildNode && currentNode.priority > leftChildNode.priority && (!rightChildNode || leftChildNode.priority < rightChildNode.priority)) {
                this.values[index] = leftChildNode;
                this.values[leftChild] = currentNode;
                //Set next iteration index.
                index = leftChild;
            } else {
                //swap right child
                this.values[index] = rightChildNode;
                this.values[rightChild] = currentNode;
                //Set next iteration index.
                index = rightChild;
            }
        }
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

let p = new PriorityQueue();
p.enqueue("A",8);
p.enqueue("B",6);
p.enqueue("C",5);
p.enqueue("D",3);
p.enqueue("E",9);
p.enqueue("F",1);
p.enqueue("G",0); 