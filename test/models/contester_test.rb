require 'test_helper'

class ContesterTest < ActiveSupport::TestCase

  test "first name should exist" do
    contester = Contester.new
    assert_not_nil contester.first_name, "First name can't be empty"
  end

  test "last name should exist" do
    contester = Contester.new
    assert_not_nil contester.last_name, "Last name can't be empty"
  end

  test "email should exist" do
    contester = Contester.new
    assert_not_nil contester.email, "Email can't be empty"
  end

  test "slogan should exist" do
    contester = Contester.new
    assert_not_nil contester.slogan, "Slogan can't be empty"
  end

  test "slogan should be under 50 characters" do
    contester = Contester.new
    contester.slogan = "012345678901234567890123456789012345678901234567890123456789"
    assert_operator contester.slogan.try(:length), :<=, 50, "The slogan is too long"
  end
end
