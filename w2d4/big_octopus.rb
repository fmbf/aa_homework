

fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']


# Sluggish Octopus
# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

def sluggish_octopus(n)
  largest_fish = ''

  i = 0
  while i < n.length - 1
    j = i
    while j < n.length

      if n[j].length > n[i].length && n[j].length > largest_fish.length
        largest_fish = n[j]
      end

      j += 1
    end
    i += 1
  end

  largest_fish
end

# Dominant Octopus
# Find the longest fish in O(n log n) time.
# Hint: You saw a sorting algorithm that runs in O(n log n)
# in the Sorting Demo. Remember that Big O is classified by the dominant term.

def dominant_octopus(fishies)
  prc = Proc.new { |x, y| y.length <=> x.length }
  fishies.merge_sort(&prc).first
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return self if count <= 1

    midpoint = count / 2
    sorted_left = self.take(midpoint).merge_sort(&prc)
    sorted_right = self.drop(midpoint).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged + left + right
  end
end

# Clever Octopus
# Find the longest fish in O(n) time.
# The octopus can hold on to the longest fish that you have found so far
# while stepping through the array only once.

def clever_octopus(fishies)
  largest = fishies.first

  fishies.each {|fish| largest = fish if fish.length > largest.length}

  largest
end



tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

# Slow Dance
# Given a tile direction, iterate through a tiles array to return
# the tentacle number (tile index) the octopus must move.
# This should take O(n) time.

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, i|
    return i if tile == direction
  end
end



# Constant Dance!
# Now that the octopus is warmed up, let's help her dance faster.
# Use a different data structure and write a new function
# so that you can access the tentacle number in O(1) time.

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
