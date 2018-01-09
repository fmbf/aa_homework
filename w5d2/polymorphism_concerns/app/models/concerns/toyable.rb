module Toyable
  extend ActiveSupport::Concern

  included do
    # validations and associations usually go here
    has_many :toys, as: :toyable
    # validates #...
    # etc
  end

  def receive_toy(name)
    Toy.find_or_create_by(
      name: name,
      toyable_type: self.class.name,
      toyable_id: self.id
    )
  end
end
