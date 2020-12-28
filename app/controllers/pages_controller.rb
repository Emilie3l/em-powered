class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :refresh, :stupidbug ]

  def home
  end

  def refresh
  end

  def stupidbug
  end
end
