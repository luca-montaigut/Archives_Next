require 'test_helper'

class ArtcilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @artcile = artciles(:one)
  end

  test "should get index" do
    get artciles_url, as: :json
    assert_response :success
  end

  test "should create artcile" do
    assert_difference('Artcile.count') do
      post artciles_url, params: { artcile: { content: @artcile.content, title: @artcile.title, user_id: @artcile.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show artcile" do
    get artcile_url(@artcile), as: :json
    assert_response :success
  end

  test "should update artcile" do
    patch artcile_url(@artcile), params: { artcile: { content: @artcile.content, title: @artcile.title, user_id: @artcile.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy artcile" do
    assert_difference('Artcile.count', -1) do
      delete artcile_url(@artcile), as: :json
    end

    assert_response 204
  end
end
