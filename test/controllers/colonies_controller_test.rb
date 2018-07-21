require 'test_helper'

class ColoniesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @colony = colonies(:one)
  end

  test "should get index" do
    get colonies_url
    assert_response :success
  end

  test "should get new" do
    get new_colony_url
    assert_response :success
  end

  test "should create colony" do
    assert_difference('Colony.count') do
      post colonies_url, params: { colony: {  } }
    end

    assert_redirected_to colony_url(Colony.last)
  end

  test "should show colony" do
    get colony_url(@colony)
    assert_response :success
  end

  test "should get edit" do
    get edit_colony_url(@colony)
    assert_response :success
  end

  test "should update colony" do
    patch colony_url(@colony), params: { colony: {  } }
    assert_redirected_to colony_url(@colony)
  end

  test "should destroy colony" do
    assert_difference('Colony.count', -1) do
      delete colony_url(@colony)
    end

    assert_redirected_to colonies_url
  end
end
