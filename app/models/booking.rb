class Booking < ApplicationRecord
  belongs_to :user
  validates :date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :voucher, presence: true
end
