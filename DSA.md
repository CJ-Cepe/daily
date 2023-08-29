# Data Structures and Algorithms

-   ## Big O

    -   a notation used to describe the computational complexity of an algorithm.
    -   ### Time Complexity
        -   the amount of time the algorithm needs to run relative to the input size
    -   ### Space Complexity
        -   the amount of memory allocated by the algorithm when run relative to the input size
    -   ### How complexity works

        -   **Complexity is described by a function**
        -   The arguments are defined by the programmer

            -   The most common variable you'll see is **n**, which usually denotes the length of an input array or string.
            -   Technically, you could introduce another variable, let's say _k_ which denotes the average value of the integers in the array. However, nobody does this.

        -   Assumptions (In the context of interviews)
            -   when dealing with integers, the larger the value, the more time operations like addition, multiplication, or printing will take
                -   we typically ignore this fact because the difference is practically very small

    -   Analyzing time complexity
    -   Analyzing space complexity

    -   List
        -   _O(n)_
        -   _O(n<sup>2</sup>)_
        -   _O(2<sup>n</sup>)_
        -   _O(log\*n)_
        -   _O(n\*m)_
    -   Rules
        -   These functions describe how the amount of operations/memory needed by the algorithm grows as the arguments tend to infinity. Because the variables are tending to infinity, constants are always ignored
        -   What we want to focus on is how an algorithm scales with the input size
            -   because both grow linearly with n
            -   because as n tends to infinity, 2 <sup>n</sup> completely dominates the other two terms.
        -   Ignore: constants, addition and subtraction,
            -   Get dominated
            -   Groes linearly with n
            -   want to focus on how an algorithm scales with the input size
        -   Best Complexity is _0(1)_
            -   called "constant time" or "constant space"
                -   O(5000000)=O(1)
            -   the algorithm ALWAYS uses the same amount of resources, regardless of the input
            -   runtime is independent of the input size
        -   3 Normal Cases
            -   Best case scenario
            -   Average case scenario
            -   Worst case scenario
            -   If only one needs to represent the algorithm, pick the worst case
            -   In most algorithms, all three of these will be equal, but some algorithms will have them differ.
        -   Logarithmic
            -   A logarithm is the inverse operation to exponents
            -   _0(log n)_ is called logarithmic time and is extremely fast
                -   means that somewhere in your algorithm, the input is being reduced by a percentage at every step
                    -   A good example of this is binary search, which is a searching algorithm. At each step, we are reducing our search space by 50%, which gives us a logarithmic time complexity.
            -   _0(n \* log n)_ is reasonably fast for most problems and also the time complexity of efficient sorting algorithms
            -   Typically, the base of the logarithm will be 2
                -   This means that if your input is size n, then the algorithm will perform x operations, where 2<sup>x</sup> = n
                -   However, the base of the logarithm doesn't actually matter for big O, since all logarithms are related by a constant factor
    -   Analyzing space complexity
        -   When you initialize variables like arrays or strings, your algorithm is allocating memory.
        -   We never count the space used by the input (it is bad practice to modify the input)
            -   and usually don't count the space used by the output (the answer) unless an interviewer asks us to
