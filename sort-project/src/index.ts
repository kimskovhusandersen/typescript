// For the purpose of this project, will use the Bubble Sort algorithm
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new CharCollection("hhalKJSDasdfaiIISk");
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
