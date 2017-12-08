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


# Exercise 3 - Map
#
# As you saw in the videos for tonight,
# a map can be implemented using a 2D array.
# Let's write a Map class
# (following a similar pattern to Stack and Queue)
# that implements a map using only arrays.

# Remember, a map stores information in key-value pairs,
# where the keys are always unique.
# When implemented with arrays, a map might look something like this:
# my_map = [[k1, v1], [k2, v2], [k3, v2], ...].
#
# Our Map class should have the following instance methods:
# assign(key, value), lookup(key), remove(key), show.
# Note that the assign method can be used to either
# create a new key-value pair or update the value for a pre-existing key.
# It's up to you to check whether a key currently exists!
#
# As always, test your code thoroughly
# to make sure all properties of maps are enforced.


class Map
  def initialize
    @map = Array.new(0) {[]}
  end

  def assign(key, value)
    @map << [key, value] unless lookup(key)
  end

  def lookup(key)
    @map.each {|(k, v)| return v if k == key}
    nil
  end

  def remove(key)
    @map.reject! {|(k, v)| k == key}
  end

  def show
    @map
  end
end
