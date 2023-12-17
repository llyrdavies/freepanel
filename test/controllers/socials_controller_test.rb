require "test_helper"

class SocialsControllerTest < ActionDispatch::IntegrationTest
  test "should get tiktok" do
    get socials_tiktok_url
    assert_response :success
  end
end
