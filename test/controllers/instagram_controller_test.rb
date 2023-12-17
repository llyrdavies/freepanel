require "test_helper"

class InstagramControllerTest < ActionDispatch::IntegrationTest
  test "should get instagram" do
    get instagram_instagram_url
    assert_response :success
  end
end
