# Exercise 1 - Stack

# Let's write a Stack class. To do this, use the following framework:
# To test that your code works,
# create a new instance of the Stack class,
# and play around with adding and removing elements.
# Remember, a stack follows the principle of LIFO!

class Stack
  def initialize
    # create ivar to store stack here!
    @stack = Array.new
  end

  def add(el)
    # adds an element to the stack
    @stack << el
  end

  def remove
    # removes one element from the stack
    @stack.pop
  end

  def show
    # return a copy of the stack
    @stack
  end
end


# Exercise 2 - Queue
#
# Now let's write a Queue class.
# We will need the following instance methods:
# enqueue(el), dequeue, and show.
#
# Test your code to ensure it follows the principle of FIFO.


class Queue
  def initialize
    @queue = Array.new
  end

  def enqueue(el)
    @queue.unshift(el)
  end

  def dequeue
    @queue.pop
  end

  def show
    @queue
  end
end
