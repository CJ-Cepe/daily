# Data Structures and Algorithms

-   ## Big O

    -   A notation used to describe the computational complexity of an algorithm.
    -   For analyzing algorithmic complexity, not for analyzing algorithmic performance
    -   An algorithm's complexity is loosely correlated with its performance, but the two are not identical
    -   Complexity is described by a function
    -   The arguments are defined by the programmer
    -   The most common variable you'll see is **n**, which usually denotes input length
    -   _O(1)_ is the Best Complexity
    -   If only one needs to represent the algorithm, pick the _worst case_
    -   In most algorithms, all three _cases_ will be equal, but some algorithms will have them differ
    -   Technically, you could introduce another variable. However, nobody does this
    -   Relies on several simplifying assumptions which are wrong in practice

    -   **Assumptions**

        -   all "operations" are equally costly
        -   the input size is asymptotic
            -   as the input size increases, it renders all but the highest order terms in the expression redundant

    -   **Rules**

        -   Ignore - Constants and Operations
            -   Because:
                -   The variables are tending to infinity, constants are always ignored
                -   Constants Get dominated as n tends to infinity
                -   Constants Grows linearly with n
                -   We want to focus on how an algorithm scales with the input size

    -   ### Time Complexity

        -   the amount of time the algorithm needs to run relative to the input size

    -   ### Space Complexity

        -   the amount of memory allocated by the algorithm when run relative to the input size

    -   ### 3 Normal Cases

        -   Best case scenario
        -   Average case scenario
        -   Worst case scenario

    -   ### Common Runtime Complexities

        -   _O(1)_ - Constant Runtime - algorithm ALWAYS uses the same amount of resources, regardless of the input
            -   O(5000000)=O(1)
        -   _O(n)_ - Linear Runtime - runtime grows in proportion with the size of the input data set
        -   _O(n<sup>2</sup>)_ - Quadratic Runtime - algorithm whose runtime is directly proportional to the square of the size of the input data set.
        -   _O(log\*n)_ - Logarithmic runtime - the amount of processing that has to be done does not get change regardless of input
        -   _O(n \* log n)_ - Linearithmic runtime - runtime of the algorithm depends on running a logarithm operation n times
        -   _O(2<sup>n</sup>)_ - Exponential runtime - algorithms where for each increase in the size of the data set, the runtime is doubled.
        -   _O(n\*m)_

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
