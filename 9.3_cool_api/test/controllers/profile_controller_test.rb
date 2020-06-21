require 'test_helper'

class ProfileControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get profile_show_url
    assert_response :success
  end

  test "should get my_images" do
    get profile_my_images_url
    assert_response :success
  end

  test "should get my_comments" do
    get profile_my_comments_url
    assert_response :success
  end

end
