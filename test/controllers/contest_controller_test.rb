require 'test_helper'

class ContestControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get contest_index_url
    assert_response :success
  end

  test "should get new" do
    get contest_new_url
    assert_response :success
  end

  test "should get create" do
    get contest_create_url
    assert_response :success
  end

  test "should get show" do
    get contest_show_url
    assert_response :success
  end

  test "should get edit" do
    get contest_edit_url
    assert_response :success
  end

  test "should get update" do
    get contest_update_url
    assert_response :success
  end

  test "should get destroy" do
    get contest_destroy_url
    assert_response :success
  end

end
