require 'rails_helper'

require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's email and password" do
        post :create, params: { user: { email: "jack_bruce@place.com", password: "" } }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "validates that the password is at least 6 characters long" do
        post :create, params: { user: { email: "jack_bruce@place.com", password: "short" } }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end
  end
end

# RSpec.describe UsersController, :type => :controller do
#
#   describe "GET #new" do
#     it "renders the new template" do
#       get :new, {}
#       expect(response).to render_template("new")
#     end
#   end
#
#   # describe "POST #create" do
#   #
#   #   context "with invalid params" do
#   #     it "validates the presence of the user's email and password" do
#   #       post :create, user: { email: 'johansebastian@bach.com'}
#   #       expect(response).not_to render_template(:new)
#   #     end
#   #
#   #     # it "validates that the password is at least 6 characters long" do
#   #     #   post :create, user: { email: 'johansebastian@bach.com', password: 'pass' }
#   #     #   expect(response).not_to render_template(:new)
#   #     # end
#   #   end
#   #
#   #   context "with valid params" do
#   #     it "redirects user to bands index on success"
#   #   end
#   # end
#
#   describe "POST #create" do
#     context "with invalid params" do
#       it "validates the presence of the user's email and password" do
#         post :create, params: { user: { email: "jack_bruce@place.com", password: "" } }
#         expect(response).to render_template("new")
#         expect(flash[:errors]).to be_present
#       end
#
#       it "validates that the password is at least 6 characters long" do
#         post :create, params: { user: { email: "jack_bruce@place.com", password: "short" } }
#         expect(response).to render_template("new")
#         expect(flash[:errors]).to be_present
#       end
#     end
# end