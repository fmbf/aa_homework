class UserMailer < ApplicationMailer
  default from: 'default@99cats.com'

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/session/new'
    mail(to: 'zwujarqr@sharklasers.com', subject: 'Welcome to 99 Cats!')
  end

end
