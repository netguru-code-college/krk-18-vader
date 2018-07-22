# frozen_string_literal: true

require 'application_system_test_case'

class ColoniesTest < ApplicationSystemTestCase
  setup do
    @colony = colonies(:one)
  end

  test 'visiting the index' do
    visit colonies_url
    assert_selector 'h1', text: 'Colonies'
  end

  test 'creating a Colony' do
    visit colonies_url
    click_on 'New Colony'

    click_on 'Create Colony'

    assert_text 'Colony was successfully created'
    click_on 'Back'
  end

  test 'updating a Colony' do
    visit colonies_url
    click_on 'Edit', match: :first

    click_on 'Update Colony'

    assert_text 'Colony was successfully updated'
    click_on 'Back'
  end

  test 'destroying a Colony' do
    visit colonies_url
    page.accept_confirm do
      click_on 'Destroy', match: :first
    end

    assert_text 'Colony was successfully destroyed'
  end
end
