FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    # password_digest { Faker:Faker::Config.random.seed }
    password { Faker::Config.random.seed }
    session_token { Faker::Config.random.seed }
    activation_token { Faker::Config.random.seed }
  end
end

# FactoryBot.define do
#   factory :capy do
#     name { Faker::Name.name }
#     color { Faker::Color.hex_color }
#
#     factory :green_capy do
#       color 'green'
#     end
#   end
# end
