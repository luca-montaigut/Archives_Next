require 'test_helper'

class UsersessionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @usersession = usersessions(:one)
  end

  test "should get index" do
    get usersessions_url, as: :json
    assert_response :success
  end

  test "should create usersession" do
    assert_difference('Usersession.count') do
      post usersessions_url, params: { usersession: { note: @usersession.note, session_id: @usersession.session_id, student_id: @usersession.student_id } }, as: :json
    end

    assert_response 201
  end

  test "should show usersession" do
    get usersession_url(@usersession), as: :json
    assert_response :success
  end

  test "should update usersession" do
    patch usersession_url(@usersession), params: { usersession: { note: @usersession.note, session_id: @usersession.session_id, student_id: @usersession.student_id } }, as: :json
    assert_response 200
  end

  test "should destroy usersession" do
    assert_difference('Usersession.count', -1) do
      delete usersession_url(@usersession), as: :json
    end

    assert_response 204
  end
end
