
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
a. getElementById =Finds one specific person by their unique ID.(one element)
b. getElementsByClassName = Finds all people wearing the same dress (class).(many elements)
c. querySelector = Finds the first person that matches your rule.(first match)
d. querySelectorAll = Finds all people that match your rule.(all matches)

2. How do you create and insert a new element into the DOM?
Ans:
a. Create element = document.createElement("hero")
b. Add content = element.textContent = "hero"
c. Insert it = parent.appendChild(element)

3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling:
When you click something, the click doesn’t stop there.
a. First, the element you clicked reacts.
b. Then its parent reacts.
c. Then the parent’s parent reacts.
d. It keeps going up step by step.
work:
It moves from inside to outside, from bottom to top.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Instead of adding a click event to every small element, you add one event to their parent.
When you click a child element, the parent catches the event and checks which child was clicked.

Why it is useful:
a, You write less code
b. It makes your website faster
c. It also works for new elements added later

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault()
a. Stops the default browser action
Example: Stop a form from submitting

stopPropagation()
a. Stops the event from bubbling up to parent elements (Stops event movement)
