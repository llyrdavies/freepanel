require "test_helper"

class YoutubeControllerTest < ActionDispatch::IntegrationTest
  test "should get youtube" do
    get youtube_youtube_url
    assert_response :success
  end
end
